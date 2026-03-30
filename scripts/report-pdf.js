/**
 * EXECUTIVE_REPORT.md → PDF 변환
 * - md-to-pdf API 사용 (dest 지정)
 * - 시스템 Chrome/Edge 경로 자동 감지 (Puppeteer Chromium 불필요)
 */
import { mdToPdf } from 'md-to-pdf';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const INPUT = join(root, 'docs', 'EXECUTIVE_REPORT.md');
const OUTPUT = join(root, 'public', 'downloads', 'EXECUTIVE_REPORT.pdf');

const localAppData = process.env.LOCALAPPDATA || '';
const BROWSER_PATHS = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  localAppData && join(localAppData, 'Google', 'Chrome', 'Application', 'chrome.exe'),
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  localAppData && join(localAppData, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
].filter(Boolean);

function findBrowser() {
  for (const p of BROWSER_PATHS) {
    if (p && existsSync(p)) return p;
  }
  return null;
}

async function main() {
  const browserPath = findBrowser();
  const launchOptions = browserPath ? { executablePath: browserPath } : {};

  const outDir = dirname(OUTPUT);
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  const stylesheetPath = join(root, 'docs', 'report-pdf.css');

  await mdToPdf(
    { path: INPUT },
    {
      dest: OUTPUT,
      launch_options: launchOptions,
      stylesheet: existsSync(stylesheetPath) ? [stylesheetPath] : [],
      pdf_options: {
        format: 'A4',
        margin: { top: '25mm', right: '25mm', bottom: '25mm', left: '25mm' },
        printBackground: true,
      },
    }
  );

  console.log('PDF 생성 완료:', OUTPUT);
}

main().catch((err) => {
  if (err.message?.includes('Could not find Chrome')) {
    console.error('\n오류: Chrome/Edge를 찾을 수 없습니다.');
    console.error('해결 방법: Chrome 또는 Edge 브라우저가 설치되어 있는지 확인하세요.');
  } else {
    console.error(err);
  }
  process.exit(1);
});
