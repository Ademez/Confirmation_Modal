import 'boxicons/css/boxicons.min.css';
import confettiBall from './images/noto_confetti-ball.png';

function App() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans border border-[#FFFFFF] w-full max-w-[502px] h-auto mx-auto rounded-[16px] box-border mt-8 sm:mt-12">
      <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]">
        <img src={confettiBall} alt="Confetti Ball" className="w-full h-full" />
      </div>
      <div className="text-center my-3 sm:my-4 lg:my-5">
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">You Did It!</h1>
        <p className="mt-2 sm:mt-3 lg:mt-4 text-gray-700 text-xs sm:text-sm lg:text-base">
          You have successfully set up your Moniewise profile. Proceed to the dashboard to start shopping.
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button className="flex items-center justify-center w-full max-w-[454px] h-[40px] sm:h-[50px] lg:h-[56px] bg-[#33658A] text-white rounded-[16px] py-3 sm:py-4 lg:py-5 px-4 gap-2 hover:bg-[#0056b3] transition">
          Continue to Dashboard
          <i className="bx bx-right-arrow-alt text-base sm:text-lg lg:text-xl"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
