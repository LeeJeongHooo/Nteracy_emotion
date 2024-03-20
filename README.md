# 디지털 리터러시 향상 서비스 Nteracy

🔗 [Chrome Extension DownLoad](https://chromewebstore.google.com/detail/%EB%94%94%EC%A7%80%ED%84%B8-%EB%A6%AC%ED%84%B0%EB%9F%AC%EC%8B%9C-%ED%96%A5%EC%83%81-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8/fglcgpahejgjhnkoajmfjajcgddlkoki?utm_source=app-launcher&authuser=1)

![nteracy-frontend](https://lh3.googleusercontent.com/CS_Agcgtb19LYKEfE9keAc4Nt0z2GOXjgK5O2d1hd3nkPE1w8IfQRl5mOI3YM9wddfCv5exyqzp9rn1PbNYJibA=s1280-w1280-h800)

 <details>
  <summary>목차</summary>

1. [버전](#1-버전-및-빌드)
2. [개발 동기 및 목적](#2-개발-동기-및-목적)
3. [제공 기능](#3-제공-기능)

</details>

### 1. 버전 및 빌드

- 버전

```
node -v
v16.16.0
```

```
nvm -v
0.39.1
```

- 빌드 명령어

```
npm run build
```

### 2. 개발 동기 및 목적

디지털 문해력으로 인한 삶의 질 격차까지 이어지는 문제점을 해결하며, 특히 챗 GPT의 등장으로 유튜브를 통한 가짜 뉴스의 피해가 증가하고 있다. 유튜브의 경우 모든 연령대에서 접근성이 좋기 때문에 진위판단이 중요하다. 뉴스 영상에 대해 스스로 정보를 판단하는 기준을 제시 후 이 영상이 가짜인지 아닌지 리터러시를 향상시켜주는 서비스

### 3. 제공 기능

유튜브 뉴스 영상에 대해 스스로 정보를 판단하는 기준을 제시하고, 판단을 보조하기 위한 기능을 제공합니다.

- <strong>기본 정보</strong>

  영상 URL을 통해 파악 가능한 기본 정보를 제공합니다.
  유튜브 정책에 따라 분류된 카테고리를 확인하고, 포털사이트 네이버와 다음 제휴 언론사를 기준으로 영상의 게시자가 주요 언론사인지 확인할 수 있습니다. 해당 영상이 게시된 일자를 통해 오늘로부터 며칠 전의 소식인지 확인할 수 있습니다.

- <strong>사실/의견 요약 정보</strong>

  자막 정보를 통해 사실과 의견 요약 정보를 제공합니다.
  GPT API를 활용해 뉴스의 사실과 의견 정보를 분리해서 확인할 수 있습니다.

- <strong>사용자 평가</strong>

  제공한 정보를 통해 판단한 시청자의 평가를 입력합니다.
  사용자가 직접 영상이 신뢰할만한 출처를 포함하고 있는지, 사실과 개인의 의견이 구분되어 있는지를 판단하고, 평가할 수 있습니다.

- <strong>히스토리 조회</strong>

  사용자가 조회한 영상의 결과 히스토리를 제공합니다.
  히스토리 선택 시, 해당 유튜브 링크로 이동하고, 제공되었던 영상 정보와 함께 사용자가 응답한 평가를 확인할 수 있습니다.
