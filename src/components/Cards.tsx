import {
  formatCurrency,
  formatNumberShort,
  formatPercentage,
} from "../utils/formatter";

interface CoinList {
  symbol: string;
  current_price: number;
  image: string | undefined;
  percentage_change_24h: number;
  market_cap: number;
  market_cap_rank: number;
}

export const CoinListCard = ({
  symbol,
  current_price,
  image,
  percentage_change_24h,
  market_cap,
  market_cap_rank,
}: CoinList) => {
  const displayPercentage = percentage_change_24h ? (
    <span
      className={
        percentage_change_24h > 0
          ? "text-green-500 text-sm"
          : "text-red-500 text-sm"
      }
    >
      {percentage_change_24h > 0 ? "▲ " : "▼ "}
      {formatPercentage(percentage_change_24h)}
    </span>
  ) : null;

  return (
    <div className="py-4 border-t-1 border-[#21262D] flex justify-between text-white items-center">
      {/* Market Cap and SN */}
      <div className="flex gap-2 items-center">
        <span>{market_cap_rank}</span>
        <div className="w-8 h-8">
          <img src={image} alt={symbol} />
        </div>
        <div className="flex flex-col">
          <span>{symbol.toUpperCase()}</span>
          <span className="text-xs">{formatNumberShort(market_cap)}</span>
        </div>
      </div>

      {/* Price and 24h% */}
      <div className="flex gap-2 items-center justify-end">
        <span className="text-primary-muted">
          ${formatCurrency(current_price)}
        </span>
        {displayPercentage}
      </div>
    </div>
  );
};
