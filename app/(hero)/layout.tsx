export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <article>{children}</article>;
}
