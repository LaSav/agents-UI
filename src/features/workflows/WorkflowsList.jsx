import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkflows } from './workflowsAPI';

const WorkflowsList = () => {
  const dispatch = useDispatch();
  const { workflows, loading, error } = useSelector((state) => state.workflows);

  useEffect(() => {
    dispatch(fetchWorkflows());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(workflows);

  return (
    <div>
      <h2>workflows</h2>
      {workflows.length === 0 ? (
        <p>No workflows available</p>
      ) : (
        workflows.map((workflow) => (
          <div key={workflow.id}>
            <h3>{workflow.name}</h3>
            <p>{workflow.description}</p>
            <p>Created by:{workflow.createdBy}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default WorkflowsList;
