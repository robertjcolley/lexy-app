/**
 * #### What
 * Reusable page header component
 *
 * #### Why
 * Reuse the styling of the header across different pages
 *
 * #### How
 * displays the props.title in the h2 HTML tag
 *
 * @export
 * @param {*} props
 * @return {*}
 */
export default function PageHeader(props) {
  return <h1 style={{ color: "red" }}>{props.title}</h1>;
}
