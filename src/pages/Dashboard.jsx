import MainLayout from "../components/layout/MainLayout"
import HeroCard from "../components/dashboard/HeroCard";
import StatsCards from "../components/dashboard/StatsCards";
import ServiceGrid from "../components/dashboard/ServiceGrid";
import TransactionTable from "../components/dashboard/TransactionTable";


export default function Dashboard() {
    return (
    <MainLayout>
        <>
            <HeroCard />

            <div className="mt-8">
                <StatsCards />
            </div>

            <div className="mt-10">
                <ServiceGrid />
            </div>

            <div className="mt-10">
                <TransactionTable />
            </div>
        </>
    </MainLayout>
    )
}