const FirstPage: React.FC<FirstPageProperties> = ({ isPrimary }) => {
  const className = (): string => {
    if (isPrimary) {
      return "has-text-primary";
    }
    return "has-text-success";
  };

  return <p className={className()}>Hello from the first page!</p>;
};

interface FirstPageProperties {
  readonly isPrimary: boolean;
}

export default FirstPage;
