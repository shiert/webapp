// 判断是否是微信环境
export const isWechat = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('micromessenger');
};
