export default function TransactionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Transaction page</h1>
      {children}
    </>
  );
}
