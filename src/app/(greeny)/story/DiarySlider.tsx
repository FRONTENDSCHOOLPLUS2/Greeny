export default function DiarySlider() {
  const itemStyle = { width: 117, height: 100, backgroundColor: '#dddddd', borderRadius: 2, flexShrink: 0 };
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <div style={itemStyle}></div>
      <div style={itemStyle}></div>
      <div style={itemStyle}></div>
    </div>
  );
}
