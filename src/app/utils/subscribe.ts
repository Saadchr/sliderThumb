export default function subscribe({ email, name, marketing }: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}
