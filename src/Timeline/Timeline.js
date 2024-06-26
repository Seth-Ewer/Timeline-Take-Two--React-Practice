import { useState } from 'react';
import './Timeline.css';
import Timenode from '../Timenode/Timenode';
import NodeDetails from '../NodeDetails/NodeDetails';

function Timeline() {

    const [nodes, setNodes] = useState([
        {
            id: 0,
            name: "nihil",
            date: "2022-12-12",
            desc: "But there was nothing there..."
        },
        {
            id: 1,
            name: "nihil",
            date: "2023-06-06",
            desc: "But there was nothing there..."
        },
        {
            id: 2,
            name: "nihil",
            date: "2024-03-03",
            desc: "But there was nothing there..."
        }
    ]);

    const [tempNodeName, setTempNodeName] = useState("nihil");
    const [tempNodeDate, setTempNodeDate] = useState("2000-01-01");
    const [tempNodeDesc, setTempNodeDesc] = useState("But there was nothing there...");
    const [targetNode, setTargetNode] = useState(0);
    const [targetName, setTargetName] = useState("nihil");
    const [targetDate, setTargetDate] = useState("2022-12-12");
    const [targetDesc, setTargetDesc] = useState("But there was nothing there...");
    const [detailsEnabled, setDetailsEnabled] = useState(false);
    
    const addNode = () => {
        var tempNodes = [];
        for(var i=0; i<=nodes.length; i++) {
                if(i == nodes.length || tempNodeDate < nodes[i].date){
                    tempNodes.push({
                        id: i,
                        name: tempNodeName,
                        date: tempNodeDate,
                        desc: tempNodeDesc
                    });
                }else{
                    tempNodes.push({
                        id: i,
                        name: nodes[i].name,
                        date: nodes[i].date,
                        desc: nodes[i].desc
                    });
                }
            }
        setNodes(tempNodes);
    }

    const deleteNode = () => {
        var tempNodes = [];
        for(var i = 0; i<nodes.length; i++) {
            if(i !== targetNode) {
                tempNodes.push({
                    id: i,
                    name: nodes[i].name,
                    date: nodes[i].date,
                    desc: nodes[i].desc,
                });
            }
        }
        setNodes(tempNodes);
    }
    
    const updateNode = () => {
        var tempNodes = [];
        for(var i = 0; i<nodes.length; i++) {
            if(i == targetNode){
                tempNodes.push({
                    id: i,
                    name: targetName,
                    date: targetDate,
                    desc: targetDesc
                })
            } else {
                tempNodes.push(nodes[i]);
            }
        }
        setNodes(tempNodes);
    }

    const selectNode = (id) => {
        setTargetNode(id);
        setTargetName(nodes[id].name);
        setTargetDate(nodes[id].date);
        setTargetDesc(nodes[id].desc);

        toggleDetails();
    }

    const toggleDetails = () => {
        setDetailsEnabled(!detailsEnabled);
    }

    return (
        <div className='LineMain'>
            {nodes.map(node => (
                <div className="NodeBox" key={node.id}>
                <Timenode name={node.name} date={node.date} desc={node.desc} id={node.id} selectNode={selectNode}/>
                </div>
            ))}
            <div className="NodeBox">
                <input name="nameEntry" value={tempNodeName} onChange={e => setTempNodeName(e.target.value)}></input>
                <input name="dateEntry" value={tempNodeDate} onChange={e => setTempNodeDate(e.target.value)}></input>
                <input name="descEntry" value={tempNodeDesc} onChange={e => setTempNodeDesc(e.target.value)}></input>
                <button onClick={addNode}>add new</button>
                <button onClick={e => setTargetNode({
                    pos: 1,
                    name: "a",
                    date: "2055-12-12",
                    desc: "Wait, what?"})}>refresh Target?</button>
                <NodeDetails
                    deleteNode={deleteNode}
                    updateNode={updateNode}
                    targetName={targetName}
                    setTargetName={setTargetName}
                    targetDate={targetDate}
                    setTargetDate={setTargetDate}
                    targetDesc={targetDesc}
                    setTargetDesc={setTargetDesc}
                />
            </div>
        </div>
    );
}

export default Timeline;