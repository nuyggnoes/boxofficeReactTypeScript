// webpack.config.mjs
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development", // development, production, or none
  entry: "./src/index.tsx", // TypeScript 진입점
  output: {
    path: path.resolve(__dirname, "dist"), // 번들 파일이 저장될 디렉토리
    filename: "bundle.js", // 생성될 번들 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // TypeScript 및 TSX 파일 처리
        exclude: /node_modules/,
        use: "ts-loader", // TypeScript 변환에 사용
      },
      {
        test: /\.css$/, // CSS 파일 처리
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // 이미지 파일 처리
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // TypeScript와 JavaScript 확장자 지원
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML 템플릿 파일
      filename: "index.html", // 생성될 HTML 파일 이름
    }),
  ],
  devServer: {
    static: path.join(__dirname, "public"), // 정적 파일이 위치한 경로
    compress: true, // gzip 압축을 활성화
    port: 3000, // 개발 서버 포트
    hot: true, // HMR (Hot Module Replacement) 활성화
  },
};
