export default function conditialRender({ condition, children }) {
    if (condition) return children;
    return null;
}
