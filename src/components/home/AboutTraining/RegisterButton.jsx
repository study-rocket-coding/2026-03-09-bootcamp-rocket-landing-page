import { Button } from '@/components/ui/button';
import icGoRocket from '@/assets/icon/ic-go-rocket.svg';

const RegisterButton = () => {
  return (
    <div className="mx-12 translate-y-6 md:translate-y-12 lg:mx-auto">
      <Button
        asChild
        variant="secondary"
        className="group bg-primary-blue-100 hover:bg-primary-blue-100 relative flex h-20 w-full items-center justify-center rounded-2xl border-2 border-neutral-700 transition-all md:h-24"
      >
        <a href="https://register.rocket-coding.com/" target="_blank" rel="noreferrer noopener">
          <h3 className="text-2xl font-bold md:text-[32px]">馬上報名！</h3>
          <img
            src={icGoRocket}
            alt="go"
            className="ml-0 hidden h-16 w-16 opacity-0 transition-all duration-500 group-hover:ml-5 group-hover:opacity-100 md:block"
          />
        </a>
      </Button>
    </div>
  );
};

export default RegisterButton;
