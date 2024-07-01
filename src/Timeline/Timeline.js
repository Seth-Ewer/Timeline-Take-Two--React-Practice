import { useState } from 'react';
import Timenode from '../Timenode/Timenode';
import NodeDetails from '../NodeDetails/NodeDetails';
import NodeCreator from '../NodeCreator/NodeCreator';


function Timeline() {

    const [nodes, setNodes] = useState([
        {
            id: 0,
            name: "Test Node 0",
            date: "2022-12-12",
            desc: "But there was nothing there..."
        },
        {
            id: 1,
            name: "Test Node 1",
            date: "2023-06-06",
            desc: "But there was nothing there..."
        },
        {
            id: 2,
            name: "Test Node 2",
            date: "2024-03-03",
            desc: "But there was nothing there..."
        }
    ]);
    
    const [activeNode, setActiveNode] = useState(null);
    const [dateError, setDateError] = useState(false);
    const [isAddingNode, setIsAddingNode] = useState(false);
    
    const addNode = (newName, newDate, newDesc) => {
        setIsAddingNode(false);
        var tempNodes = [];
        var done = false;
        for(var i=0; i<=nodes.length; i++) {
                if((i == nodes.length || newDate < nodes[i].date) && !done){
                    tempNodes.push({
                        id: i,
                        name: newName,
                        date: newDate,
                        desc: newDesc
                    });
                    done = true;
                }else if(!done){
                    tempNodes.push({
                        id: i,
                        name: nodes[i].name,
                        date: nodes[i].date,
                        desc: nodes[i].desc
                    });
                }else{
                    tempNodes.push({
                        id: i,
                        name: nodes[i-1].name,
                        date: nodes[i-1].date,
                        desc: nodes[i-1].desc
                    });
                }
            }
        
        setNodes(tempNodes);
    }

    const deleteNode = (id) => {
        var tempNodes = [];
        for(var i = 0; i<nodes.length; i++) {
            if(i > id){
                tempNodes.push({
                    id: i-1,
                    name: nodes[i].name,
                    date: nodes[i].date,
                    desc: nodes[i].desc,
                });
            }else if(i !== id) {
                tempNodes.push({
                    id: i,
                    name: nodes[i].name,
                    date: nodes[i].date,
                    desc: nodes[i].desc,
                });
            }
        }
        setNodes(tempNodes);
        setActiveNode(null);
    }
    
    const updateNode = (id, targetName, targetDate, targetDesc) => {
        var tempNodes = [];
        var added = false;
        var nodesAdjust = 0;
        for(var i=0; i<nodes.length; i++) {
                if((i == nodes.length-1 || targetDate < nodes[i+nodesAdjust].date) && !added){
                    tempNodes.push({
                        id: i,
                        name: targetName,
                        date: targetDate,
                        desc: targetDesc
                    });
                    added = true;
                    nodesAdjust--;
                }else if(i+nodesAdjust == id) {
                    i--;
                    nodesAdjust++;
                }else {
                    tempNodes.push({
                        id: i,
                        name: nodes[i+nodesAdjust].name,
                        date: nodes[i+nodesAdjust].date,
                        desc: nodes[i+nodesAdjust].desc
                    });
                }
            }
        
        setNodes(tempNodes);
        setActiveNode(null);
    }

    const selectNode = (id) => {
        setActiveNode({
            id: id,
            name: nodes[id].name,
            date: nodes[id].date,
            desc: nodes[id].desc
        })
    }

    const modal = () => {
        if(activeNode != null){
            return(
                <NodeDetails
                    activeNode={activeNode}
                    setActiveNode={setActiveNode}
                    deleteNode={deleteNode}
                    updateNode={updateNode}
                />
            );
        }else if(isAddingNode == true){
            return(
                <NodeCreator
                    addNode={addNode}
                    close={()=>setIsAddingNode(false)}   
                />);
        }
    }

    return (
        <div className='columns'>
            <div className='column'></div>
            <div className='column is-half'>
                {nodes.map(node => (
                    <div className="" key={node.id}>
                    <Timenode name={node.name} date={node.date} desc={node.desc} id={node.id} selectNode={e => selectNode(node.id)}/>
                    </div>
                ))}
                {modal()}
                <div className='has-text-centered'>
                    <button onClick={() => setIsAddingNode(true)} className='button is-primary'>add new...</button>
                </div>
            </div>
            <div className='column'></div>
        </div>
    );
}

export default Timeline;