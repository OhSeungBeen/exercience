import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

export default async function BasicLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
