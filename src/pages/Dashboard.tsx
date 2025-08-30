import { useQuery } from "@tanstack/react-query";
import { getTopCoins } from "../services/coingecko";
import { CoinListCard } from "../components/Cards";

const Dashboard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["coins"],
    queryFn: getTopCoins,
    refetchInterval: 10000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load coins</p>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Coins</h1>
      <div className="grid">
        <div className="flex justify-between mb-4">
          <p className="flex gap-2">
            <span>#</span>
            <span>Market cap</span>
          </p>
          <p className="flex gap-2">
            <span>Price</span>
            <span>24h%</span>
          </p>
        </div>
        {data.map((coin: any) => (
          <CoinListCard
            key={coin.market_cap_rank}
            symbol={coin.symbol}
            current_price={coin.current_price}
            image={coin.image}
            percentage_change_24h={coin.price_change_percentage_24h}
            market_cap={coin.market_cap}
            market_cap_rank={coin.market_cap_rank}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
