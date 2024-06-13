/** 영상 주소들 */
const video_urls = {
  // 초급
  beginner: [
    // 걷기
    "./videos/5.mp4",
    // 런지
    "./videos/6.mp4",
    // 풀업
    "./videos/10.mp4",
    // 맨몸 스쿼트
    "./videos/11.mp4",
    // 푸쉬업
    "./videos/12.mp4",
  ],
  // 중급
  intermediate: [
    // 바벨 런지
    "./videos/2.mp4",
    // 벤치프레스
    "./videos/3.mp4",
    // 바벨 스쿼트
    "./videos/4.mp4",
    // 오버헤드 프레스
    "./videos/7.mp4",
    // 데드리프트
    "./videos/8.mp4",
  ],
  // 고급
  advanced: [
    // 저쳐스쿼트
    "./videos/1.mp4",
    // 업라이트 로우
    "./videos/9.mp4",
    // 백스쿼트 프레스
    "./videos/13.mp4",
    // 클린 앤 저크
    "./videos/14.mp4",
    // 링딥스
    "./videos/15.mp4",
  ],
};

/** 영상의 제목들 */
const titles = {
  // 초급
  beginner: [
    "초급 1 걷기",
    "초급 2 런지",
    "초급 3 풀업",
    "초급 4 맨몸 스쿼트",
    "초급 5 푸쉬업",
  ],
  // 중급
  intermediate: [
    "중급 1 바벨 런지",
    "중급 2 벤치프레스",
    "중급 3 바벨 스쿼트",
    "중급 4 오버헤드 프레스",
    "중급 5 데드리프트",
  ],
  // 고급
  advanced: [
    "고급 1 저쳐스쿼트",
    "고급 2 업라이트 로우",
    "고급 3 백스쿼트 프레스",
    "고급 4 클린 앤 저크",
    "고급 5 링딥스",
  ],
};

/** 영상 설명들 */
const video_descriptions = {
  // 초급
  beginner: [
    "(초급 1 걷기 설명)",
    "(초급 2 런지 설명)",
    "(초급 3 풀업 설명)",
    "초급 (4 맨몸 스쿼트 설명)",
    "(초급 5 푸쉬업 설명)",
  ],
  // 중급
  intermediate: [
    "중급 (1 바벨 런지 설명)",
    "(중급 2 벤치프레스 설명)",
    "중급 (3 바벨 스쿼트 설명)",
    "중급 (4 오버헤드 프레스 설명)",
    "(중급 5 데드리프트 설명)",
  ],
  // 고급
  advanced: [
    "(고급 1 저쳐스쿼트 설명)",
    "고급 (2 업라이트 로우 설명)",
    "고급 (3 백스쿼트 프레스 설명)",
    "고급 4 (클린 앤 저크 설명)",
    "(고급 5 링딥스 설명)",
  ],
};

/**
 * 영상을 표시해주는 함수
 * @param {HTMLElement} targetElement 영상을 출력할 엘리먼트
 * @param {"beginner" | "intermediate" | "advanced"} level
 */
function init(targetElement, level) {
  targetElement ??= document.querySelector("videos");

  video_urls[level].forEach((url, index) => {
    /** 모든 내용을 이 엘리먼트에 담아서 출력에 사용함 */
    const newElement = document.createElement("div");

    // 제목 엘리먼트가
    // <div>
    //   <span> 제목 </span>
    // <div>
    // 구조가 되도록 작성하였습니다.
    // 단일 엘리먼트로만 구성하게 되면 가로 크기가 고정되어 CSS를 통해 "제목 부분에만 배경 색을 주는 것이 불가하기 때문에" 이렇게 구성하였습니다

    /** 제목을 감싸는 엘리먼트 */
    const titleWrapperElement = document.createElement("div");
    /** 제목 엘리먼트 */
    const titleElement = document.createElement("span");

    /** 카드 엘리먼트; 화면에서 영상의 배경과 영상이 함께 차지하는 영역 */
    const cardElement = document.createElement("div");
    /** 영상 엘리먼트 (카드 엘리먼트 내에 위치함) */
    const videoElement = document.createElement("video");
    /** 영상 설명 엘리먼트 */
    const descElement = document.createElement("div");

    // 제목 내용 설정
    titleElement.innerHTML = titles[level][index];
    titleWrapperElement.appendChild(titleElement);

    // 영상 주소 설정
    videoElement.setAttribute("controls", "");
    videoElement.setAttribute("src", url);
    // 영상을 카드 엘리먼트에 입력
    cardElement.classList.add("card");
    cardElement.appendChild(videoElement);
    // 영상 설명 데이터를 가져와 입력함
    descElement.innerHTML = video_descriptions[level][index];

    // 영상 카드와 영상 설명을 엘리먼트에 추가
    newElement.appendChild(titleWrapperElement);
    newElement.appendChild(cardElement);
    newElement.appendChild(descElement);

    // 최종적으로 영상 목록 엘리먼트에 추가
    targetElement.appendChild(newElement);
  });
}
