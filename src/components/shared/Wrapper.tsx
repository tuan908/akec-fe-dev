export function Wrapper({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="w-full h-full min-h-dvh max-w-full flex items-center justify-center">
      {children}
    </div>
  );
}
