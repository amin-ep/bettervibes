import VerificationForm from "./components/VerificationForm";

function VerifyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center py-10">
      <div className="rounded-xl bg-white p-2 md:p-4 lg:p-6 xl:p-8">
        <VerificationForm />
      </div>
    </div>
  );
}

export default VerifyPage;
