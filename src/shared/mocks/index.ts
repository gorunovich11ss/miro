export async function enableMocking() {
  if(import.meta.env.PROD) {
    return;
  }

  const { worker } = await import("@/shared/mocks/browser.ts");
  return worker.start();
}