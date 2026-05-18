import "../styles/uploadModal.css";

export default function UploadModal() {
  return (
    <div id="uploadModal">
      <h2 className="uploadModal-title">Log Activity</h2>
      <div className="uploadModal-field">
        <p className="uploadModal-label">Activity Name</p>
        <input type="text" placeholder="Daily Run" />
      </div>

      <div className="uploadModal-row">
        <div className="uploadModal-field">
          <p className="uploadModal-label">Distance (mi)</p>
          <input type="number" placeholder="0.00" min={0} step={0.01} />
        </div>
        <div className="uploadModal-field">
          <p className="uploadModal-label">Duration</p>
          <input type="text" placeholder="00:00" pattern="\d{1,2}:\d{2}" />
        </div>
        <div className="uploadModal-field">
          <p className="uploadModal-label">Avg HR (bpm)</p>
          <input type="number" placeholder="150" min={0} max={250} step={1} />
        </div>
      </div>

      <div className="uploadModal-row">
        <div className="uploadModal-field">
          <p className="uploadModal-label">Date</p>
          <input type="date" />
        </div>
        <div className="uploadModal-field">
          <p className="uploadModal-label">Time</p>
          <input type="time" />
        </div>
      </div>

      <div className="uploadModal-row">
        <div className="uploadModal-field">
          <p className="uploadModal-label">City</p>
          <input type="text" placeholder="e.g. New York" />
        </div>
        <div className="uploadModal-field">
          <p className="uploadModal-label">State</p>
          <select>
            <option value="">--</option>
            <option>AL</option><option>AK</option><option>AZ</option><option>AR</option>
            <option>CA</option><option>CO</option><option>CT</option><option>DE</option>
            <option>FL</option><option>GA</option><option>HI</option><option>ID</option>
            <option>IL</option><option>IN</option><option>IA</option><option>KS</option>
            <option>KY</option><option>LA</option><option>ME</option><option>MD</option>
            <option>MA</option><option>MI</option><option>MN</option><option>MS</option>
            <option>MO</option><option>MT</option><option>NE</option><option>NV</option>
            <option>NH</option><option>NJ</option><option>NM</option><option>NY</option>
            <option>NC</option><option>ND</option><option>OH</option><option>OK</option>
            <option>OR</option><option>PA</option><option>RI</option><option>SC</option>
            <option>SD</option><option>TN</option><option>TX</option><option>UT</option>
            <option>VT</option><option>VA</option><option>WA</option><option>WV</option>
            <option>WI</option><option>WY</option>
          </select>
        </div>
      </div>

      <div className="uploadModal-row">
        <div className="uploadModal-field">
          <p className="uploadModal-label">Run Type</p>
          <select>
            <option>Easy</option>
            <option>Long</option>
            <option>Workout</option>
            <option>Race</option>
            <option>Recovery</option>
          </select>
        </div>
        <div className="uploadModal-field">
          <p className="uploadModal-label">Dynamic Title</p>
          <select>
            <option>Do Not Include</option>
            <option>Include</option>
          </select>
        </div>
        <div className="uploadModal-field">
          <p className="uploadModal-label">Weather Data</p>
          <select>
            <option>Do Not Include</option>
            <option>Include</option>
          </select>
        </div>
      </div>

      <button id="uploadModal-save">Save Activity</button>
    </div>
  );
}