export const HTTP_ERROR = (message: string) => {
  switch (message) {
    case 'Network Error':
      return '네트워크에 에러가 생겼습니다. 새로고침을 해보십시오';

    default:
      return '문제가 생겼습니다 잠시 후 다시 시도해 주십시오';
  }
};
