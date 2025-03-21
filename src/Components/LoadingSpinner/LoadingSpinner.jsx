import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <ClipLoader
                    className="mx-auto"
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
        </div>
    );
};

export default LoadingSpinner;