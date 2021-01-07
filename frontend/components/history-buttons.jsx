import React, { useState } from "react";
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const HistoryButtons = ({ canUndo, canRedo, onUndo, onRedo, state}) => {
  const handleSave = () => {
    let cache = JSON.stringify(state)
    window.localStorage.setItem("cache", cache)
  }

  return (
    <div className="btn-div">
      <button data-testid="undo-btn" onClick={onUndo} disabled={!canUndo}>
        Undo
      </button>
      <button data-testid="redo-btn" onClick={onRedo} disabled={!canRedo}>
        Redo
      </button>
      <button onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    canUndo: state.entities.categoryRewards.past.length > 0,
    canRedo: state.entities.categoryRewards.future.length > 0,
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryButtons)

