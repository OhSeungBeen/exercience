import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

export default function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="bg-base-100">{children}</main>
      <footer className="h-[400px] bg-zinc-800"></footer>
    </>
  );
}
