# 메모 애플리케이션

## Tech Stack
- Vite
- Node.js (v20.18.2)
- React.js (v19)
- Chakra UI (v3)
- Zustand (v5)

## 개발 모드 시작하기
```
pnpm dev
```

## 프로덕션 모드 시작하기
```
pnpm build && pnpm preview
```

## 실행 시 에러 대응
#### 맥OS esbuild 권한 이슈
```pnpm dev``` 명령어 사용시 esbuild 실행 파일에 대한 권한문제가 있을 경우 chmod를 이용해 permission을 변경해야 합니다.
```
chmod +x node_modules/.pnpm/esbuild@0.25.0/node_modules/esbuild/node_modules/@esbuild/darwin-arm64/bin/esbuild
```

## 주요 기능 설명
![스크린샷 2025-03-04 오전 12 08 10](https://github.com/user-attachments/assets/269d0b8e-4163-44df-b756-5849ac106eef)


## 폴더 구조
```
├── public                  # static assets
└── src
    ├── components          # 공통 컴포넌트
    │   ├── Icons           # 아이콘 컴포넌트
    │   └── ui              # Chakra UI 컴포넌트
    ├── configs             # 설정 파일
    ├── containers          # 페이지별 컨테이너
    │   └── name
    │       ├── components
    │       └── hooks
    ├── pages               # 페이지
    ├── providers           # providers
    ├── stores              # Zustand 스토어
    └── utils               # 공통 utils
```

### 상태 관리 및 데이터 흐름 설계
##### Zustand

- createSelectors
	- 상태 변경을 세밀하게 감지하여 필요한 컴포넌트만 리렌더링되도록 최적화하는 유틸리티 함수입니다.
	- 스토어의 각 상태에 대해 개별적인 selector를 생성하여, 특정 상태가 변경될 때만 해당 상태를 구독하는 컴포넌트가 리렌더링됩니다.

```tsx
// createSelectors 사용 예시
const useMemoStoreSelector = createSelectors(useMemoStoreBase);

// 개별 상태 접근
const list = useMemoStoreSelector.use.list();
```

- 상태 관리 계층 구조
- useMemoState (상태 관리 계층):
	- 메모의 기본 상태(list)와 상태 변경 함수(addMemo, updateMemo, deleteMemo)를 관리합니다.
	- createSelectors를 통해 생성된 selector들을 사용하여 최적화된 상태 접근을 제공합니다.
- useMemoHandler (액션 관리 계층):
	- 메모와 관련된 모든 액션(onAddMemo, onUpdateMemo, onDeleteMemo)을 관리합니다.
	- 상태 변경 로직을 한 곳에서 관리하여 일관성을 유지합니다.
- useMemoStore (추상화 계층):
	- 컴포넌트에서 사용할 수 있는 단일 인터페이스를 제공합니다.
	- 상태와 액션을 추상화하여 내부 구현을 캡슐화합니다.
	- Zustand 스토어에 직접 접근하지 않고 이 훅을 통해서만 상태를 변경하도록 강제합니다.

##### Modal
- 메모의 생성, 수정, 삭제, 조회는 모달을 통해서 구현했습니다. 모달의 공통적인 성질을 추상화시킨 BaseModal을 이용해 각각의 모달을 만들었습니다.
- 생성과 수정은 이루어지는 액션이 유사하여 CreateUpdateModal을 만들어 초기값이 있을 때는 Update를, 없다면 Create를 하도록 구성했습니다.
- 모달을 사용하는 컴포넌트마다 isOpen, onOpen, onClose 상태를 개별적으로 관리해야 하는 문제를 해결하기 위해 Context API를 활용했습니다. 이를 통해 모달을 전역 상태로 관리하여 코드의 중복을 줄이고 유지보수성을 높였습니다.
- useContextModal 훅이 제공하는 openModal, closeModal 함수를 통해 모달을 제어합니다. 이 방식으로 각 컴포넌트에서 개별적인 상태 관리 없이도 필요한 시점에 적절한 모달을 열고 닫을 수 있습니다.
```tsx
  // 모달 사용 예시
  const { openModal, closeModal } = useContextModal();

  const onOpenDetailModal = ({ title, content }) => {
    openModal(DETAIL_MODAL, {
      title,
      content,
      open: true,
      onClose: closeModal
    });
  };
```
- 타입 안전성을 위해 각 모달의 props 타입을 명시적으로 정의하고, ModalPropsMap을 통해 모달 타입과 props를 매핑하여 타입 추론과 자동완성이 가능하도록 구현했습니다.

이러한 설계를 통해 모달관리의 복잡성을 줄이고, 재사용성을 높이며 유지보수가 용이하도록 했습니다.

### 입력 유효성 검사 및 에러  처리
- 유효성 검사 함수
	- validate.ts에 선언된 함수들은 입력된 제목과 내용의 유효성을 검사합니다. 각 함수는 isValid와 message를 포함한 객체를 반환합니다.
	- isValid: 입력이 유효한지 여부를 나타내는 불리언 값입니다.
	- message: 유효하지 않은 경우 사용자에게 표시할 에러 메시지입니다.

- 에러처리 및 오류 발생 시 사용자 알림
	- 유효성 검사 결과를 바탕으로 toaster를 사용하여 사용자에게 에러 메시지를 표시합니다.
	- toaster.create 메서드를 통해 에러 메시지를 화면에 띄워 사용자에게 입력 오류를 알립니다.

```tsx
// validate 함수 반환값
return {
    isValid: boolean,
    message: string,
}

// toaster 사용예시
 const titleValidate = validateTitle(title);
    if (!titleValidate.isValid) {
      toaster.create({
        description: titleValidate.message,
        type: "error",
      });
      return;
    }
```
이러한 설계를 통해 코드중복을 줄이고, 재사용성을 높여 유지보수성을 향상시켰습니다.
