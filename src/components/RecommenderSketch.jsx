// A drawn version of the Recommender interface (three linked dropdowns and a
// list of saved results), since the app needs a local server to run.
function RecommenderSketch() {
  const fields = [
    { label: 'Genre', value: 'Science Fiction' },
    { label: 'Mood', value: 'Curious' },
    { label: 'Level', value: 'Intermediate' },
  ]

  return (
    <div className="preview">
      <div className="browser sketch" role="img" aria-label="Sketch of the Recommender app: genre, mood and level dropdowns above a list of saved recommendations">
        <span className="browser-bar" aria-hidden="true">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-url">localhost:5173</span>
        </span>
        <span className="browser-view sketch-view" aria-hidden="true">
          <span className="sketch-title">What should I read next?</span>
          <span className="sketch-fields">
            {fields.map((f) => (
              <span className="sketch-field" key={f.label}>
                <span className="sketch-label">{f.label}</span>
                <span className="sketch-select">{f.value}</span>
              </span>
            ))}
          </span>
          <span className="sketch-button">Get recommendation</span>
          <span className="sketch-results">
            <span className="sketch-result">
              <b>Recommendation 1</b>
            </span>
            <span className="sketch-result is-open">
              <b>Recommendation 2</b>
              <span className="sketch-lines">
                <i style={{ width: '92%' }} />
                <i style={{ width: '78%' }} />
                <i style={{ width: '85%' }} />
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default RecommenderSketch
