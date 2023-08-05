import { RequireAuth } from '@/contexts/auth';
import { Navbar } from '@/components/navbar';

const ProblemDetailLayout = ({ children }) =>{
    return(
        <div className='flex flex-col min-h-[800px] h-screen'>
            <header className='bg-black'>
                <Navbar/>
            </header>
            <main className="py-10 px-4 grow flex flex-col">
                <RequireAuth>
                    {children}
                </RequireAuth>
            </main>   
        </div>
    )
}

export default ProblemDetailLayout;