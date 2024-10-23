import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

export default async function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="w-full lg:mx-auto lg:w-[1024px]">{children}</main>
      <footer className="h-[400px] bg-zinc-800"></footer>
    </>
  );
}
