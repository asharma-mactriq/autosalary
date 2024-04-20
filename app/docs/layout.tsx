export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 py-2 md:py-4">
      <div className="inline-block  text-center justify-center">{children}</div>
    </section>
  );
}
