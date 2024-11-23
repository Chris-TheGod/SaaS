export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('git');

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      {children}
    </div>
  );
}
