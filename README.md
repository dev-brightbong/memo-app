# 메모 애플리케이션

### 설계순서
1. 라우팅 설계 - 원페이지로 생성/조회/수정/삭제는 모달로 처리할예정
2. 데이터 모델 설계 - 메모 타입/인터페이스 정의
3. 데이터 처리 로직 구현 - CRUD 로직
4. UI 퍼블리싱
  - 공통 컴포넌트 구현
  - 목록 컴포넌트 구현
  - 모달 컴포넌트 구현
5. 데이터 바인딩 처리


### 이슈

#### 맥OS esbuild 권한 이슈
```pnpm dev``` 명령어 사용시 esbuild 실행 파일에 대한 권한문제가 있을 경우 chmod를 이용해 permission을 변경해야 합니다.

```bash
chmod +x node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/node_modules/@esbuild/darwin-arm64/bin/esbuild