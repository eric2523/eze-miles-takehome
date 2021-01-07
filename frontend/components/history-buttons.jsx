import React from "react";
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

const HistoryButtons = ({ canUndo, canRedo, onUndo, onRedo }) => {
  return (
    <div>
      <button onClick={onUndo} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={onRedo} disabled={!canRedo}>
        Redo
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    canUndo: state.entities.categoryRewards.past.length > 0,
    canRedo: state.entities.categoryRewards.future.length > 0,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryButtons)

