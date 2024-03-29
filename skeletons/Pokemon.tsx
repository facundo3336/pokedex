import ContentLoader from "react-content-loader";

export const PokemonSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={280}
      viewBox="0 0 280 280"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="544" y="322" rx="3" ry="3" width="88" height="6" />
      <rect x="555" y="317" rx="3" ry="3" width="52" height="6" />
      <rect x="10" y="213" rx="2" ry="2" width="40" height="10" />
      <rect x="104" y="351" rx="3" ry="3" width="117" height="5" />
      <rect x="32" y="356" rx="2" ry="2" width="72" height="7" />
      <rect x="10" y="234" rx="2" ry="2" width="163" height="16" />
      <rect x="10" y="259" rx="2" ry="2" width="68" height="9" />
      <rect x="80" y="259" rx="2" ry="2" width="68" height="9" />
      <rect x="10" y="2" rx="0" ry="0" width="230" height="199" />
    </ContentLoader>
  );
};
