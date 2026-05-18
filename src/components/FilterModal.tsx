import "../styles/filterModal.css";

export default function FilterModal() {
  return (
    <div id="filterModal">
      <h2 className="filterModal-title">Filter Activities</h2>

      <div className="filterModal-field">
        <p className="filterModal-label">Run Type</p>
        <div className="filterModal-checkboxGroup">
          {["Easy", "Long", "Workout", "Race", "Recovery"].map((type) => (
            <label key={type} className="filterModal-checkbox">
              <input type="checkbox" value={type} />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="filterModal-row">
        <div className="filterModal-field">
          <p className="filterModal-label">Date From</p>
          <input type="date" />
        </div>
        <div className="filterModal-field">
          <p className="filterModal-label">Date To</p>
          <input type="date" />
        </div>
      </div>

      <div className="filterModal-row">
        <div className="filterModal-field">
          <p className="filterModal-label">Min Distance (mi)</p>
          <input type="number" placeholder="0.00" min={0} step={0.01} onKeyDown={(e) => ["e","E","+","-"].includes(e.key) && e.preventDefault()} />
        </div>
        <div className="filterModal-field">
          <p className="filterModal-label">Max Distance (mi)</p>
          <input type="number" placeholder="0.00" min={0} step={0.01} onKeyDown={(e) => ["e","E","+","-"].includes(e.key) && e.preventDefault()} />
        </div>
      </div>

      <div className="filterModal-row">
        <div className="filterModal-field">
          <p className="filterModal-label">Min Duration</p>
          <input type="text" placeholder="MM:SS or H:MM:SS" maxLength={8} />
        </div>
        <div className="filterModal-field">
          <p className="filterModal-label">Max Duration</p>
          <input type="text" placeholder="MM:SS or H:MM:SS" maxLength={8} />
        </div>
      </div>

      <div className="filterModal-field">
        <p className="filterModal-label">Location</p>
        <input type="text" placeholder="e.g. New York, NY" />
      </div>

      <div className="filterModal-row">
        <button id="filterModal-clear">Clear</button>
        <button id="filterModal-apply">Apply Filters</button>
      </div>
    </div>
  );
}