export default function Section(props) {
  return (
    <div>
      <h2>{props.sectionHeader}</h2>
      <p>{props.sectionContent}</p>
    </div>
  );
}
