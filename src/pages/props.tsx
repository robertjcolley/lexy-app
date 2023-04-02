import PageHeader from "../components/PageHeader";
import Section from "../components/Section";

export default function Page1() {
  return (
    <div>
      <PageHeader title={"Page 1"} />
      <Section
        sectionHeader={"Section 1"}
        sectionContent={`Section 1 content`}
      />
      <Section sectionHeader="Section 2" sectionContent="Section 2 content" />
      <Section sectionHeader="Section 3" sectionContent="Section 1 content" />
    </div>
  );
}
