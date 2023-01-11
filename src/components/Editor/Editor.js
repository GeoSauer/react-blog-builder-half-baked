import React from 'react';

import './Editor.css';

export default function Editor({
  title,
  setTitle,
  subtitle,
  setSubtitle,
  font,
  setFont,
  align,
  setAlign,
}) {
  const newTitle = (event) => setTitle(event.target.value);
  const newSubtitle = (event) => setSubtitle(event.target.value);
  const newFont = (event) => setFont(event.target.value);
  const newAlign = (event) => setAlign(event.target.value);

  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" value={title} onChange={newTitle} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" value={subtitle} onChange={newSubtitle} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select value={font} onChange={newFont}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input name="align" type="radio" value="left" onChange={newAlign} />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" onChange={newAlign} />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" onChange={newAlign} />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} />
        <label>Text</label>
      </div>
    </div>
  );
}
