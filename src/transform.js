const fs = require('fs');
const path = require('path');
const { transform } = require('@svgr/core');
const { optimize } = require('svgo');

const svgDir = path.join(__dirname, '../../SVG');
const outputDir = path.join(__dirname, '../icons');

console.log('SVG_DIR:', svgDir);
console.log('OUTPUT_DIR:', outputDir);

// SVGO configuration to preserve gradients
const svgoConfig = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                    cleanupIds: false,
                    removeUnknownElements: false,
                    removeUselessDefs: false,
                    removeUnusedNS: false,
                    cleanupNumericValues: false,
                    convertPathData: false,
                    convertTransform: false,
                    removeEmptyAttrs: false,
                },
            },
        },
    ],
};

// SVGR configuration
const svgrConfig = {
    plugins: ['@svgr/plugin-jsx'],
    typescript: true,
    dimensions: true,
    ref: false,
    titleProp: false,
};

async function processFile(filePath, fileName) {
  try {
    console.log('Processing file:', filePath);
    
    // Чтение SVG файла
    const svg = fs.readFileSync(filePath, 'utf8');
    console.log('Read SVG file:', fileName);
    
    // Оптимизация SVG
    const optimizedSvg = optimize(svg, svgoConfig);
    console.log('Optimized SVG:', fileName);
    
    if (optimizedSvg.data) {
      // Конвертация в React компонент
      const componentName = fileName
        .replace('.svg', '')
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

      console.log('Converting to React component:', componentName);

      const jsCode = await transform(
        optimizedSvg.data,
        {
          ...svgrConfig,
          componentName: `Lg${componentName}`
        },
        { componentName: `Lg${componentName}` }
      );

      // Сохранение результата
      const outputPath = path.join(outputDir, `${fileName.replace('.svg', '.tsx')}`);
      fs.writeFileSync(outputPath, jsCode);
      
      console.log(`✓ Processed: ${fileName} -> ${outputPath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${fileName}:`, error);
  }
}

async function main() {
  console.log('Starting conversion...');
  
  // Создание выходной директории
  if (!fs.existsSync(outputDir)) {
    console.log('Creating output directory:', outputDir);
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Проверка существования SVG директории
  if (!fs.existsSync(svgDir)) {
    console.error('SVG directory not found:', svgDir);
    process.exit(1);
  }

  console.log('SVG directory exists:', svgDir);

  // Обработка всех SVG файлов
  const files = fs.readdirSync(svgDir)
    .filter(file => file.endsWith('.svg'));

  console.log(`Found ${files.length} SVG files in ${svgDir}`);

  for (const file of files) {
    await processFile(path.join(svgDir, file), file);
  }

  // Создание индексного файла
  const indexContent = files
    .map(file => {
      const componentName = file
        .replace('.svg', '')
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
      const fileName = file.replace('.svg', '');
      return `export { default as Lg${componentName} } from './${fileName}';`;
    })
    .join('\n');

  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
  console.log('✓ Created index.ts');
}

main().catch(console.error); 