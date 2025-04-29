
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 color-black text-black">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-6">Перейдите на страницу Ивана Грозного</p>
        <Link to="/ivan">
          <Button size="lg" className="font-bold">
            Открыть страницу Ивана IV Грозного
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
