export default function LandingPage({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='container relative flex flex-col'>{children}</div>;
}
