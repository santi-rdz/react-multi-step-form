import StepProvider from "./context/StepProvider";
export default function AppContainer({ children }) {
  return (
    <StepProvider>
      <main
        className="font-ubuntu-normal min-h-dvh bg-blue-100 pb-32 md:pb-0
         md:flex md:items-center md:justify-center"
      >
        <div className="app md:my-container grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-6 md:rounded-2xl md:bg-white md:p-4 md:shadow-2xl lg:grid-cols-[45fr_100fr] lg:gap-16">
          {children}
        </div>
      </main>
    </StepProvider>
  );
}
