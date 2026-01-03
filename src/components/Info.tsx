export const Info = ({
  headingText,
  bodyText,
}: {
  headingText: string;
  bodyText: string;
}) => {
  return (
    <div>
      <h2>{headingText}</h2>
      <p>{bodyText}</p>
    </div>
  );
};
