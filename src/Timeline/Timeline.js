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

    const [tempNodeId, setTempNodeId] = useState(3);
    const [tempNodeName, setTempNodeName] = useState("nihil");
    const [tempNodeDate, setTempNodeDate] = useState("2000-01-01");
    const [tempNodeDesc, setTempNodeDesc] = useState("But there was nothing there...");
    const [targetNode, setTargetNode] = useState({
        pos: 0,
        name: "nihil",
        date: "2022-12-12",
        desc: "But there was nothing there..."
    });
    
    const addNode = () => {
        var tempNodes = [];
        var marker = 0;
        for(var i=0; i<=tempNodeId; i++) {
                if(i == tempNodeId || tempNodeDate < nodes[i].date){
                    tempNodes.push({
                        id: tempNodeId,
                        name: tempNodeName,
                        date: tempNodeDate,
                        desc: tempNodeDesc
                    });
                    marker = i;
                    break;
                }else{
                    tempNodes.push(nodes[i]);
                }
            }
        for(var i = marker; i<tempNodeId; i++) {
                tempNodes.push(nodes[i]);
            }
        setNodes(tempNodes);
        setTempNodeId(tempNodeId+1);
    }

    const deleteNode = (tnode) => {
        var tempNodes = [];
        for(var i = 0; i<nodes.length; i++) {
            if(i > targetNode.pos) {
                tempNodes.push({
                    id: nodes[i].id-1,
                    name: nodes[i].name,
                    date: nodes[i].date,
                    desc: nodes[i].desc,
                });
            }else if(i !== targetNode.pos) {
                tempNodes.push(nodes[i]);
            }
        }
        setNodes(tempNodes);
        setTempNodeId(tempNodeId-1);
    }
    
    const updateNode = (tnode, tname, tdate, tdesc) => {
        var tempNodes = [];
        for(var i = 0; i<nodes.length; i++) {
            if(i == tnode){
                tempNodes.push({
                    id: nodes[i].id,
                    name: tname,
                    date: tdate,
                    desc: tdesc
                })
            } else {
                tempNodes.push(nodes[i]);
            }
        }
        setNodes(tempNodes);
    }

    return (
        <div className='LineMain'>
            {nodes.map(node => (
                <div className="NodeBox" key={node.id}>
                <Timenode name={node.name} date={node.date} desc={node.desc} id={node.id} />
                </div>
            ))}
            <div className="NodeBox">
                <input name="nameEntry" value={tempNodeName} onChange={e => setTempNodeName(e.target.value)}></input>
                <input name="dateEntry" value={tempNodeDate} onChange={e => setTempNodeDate(e.target.value)}></input>
                <input name="descEntry" value={tempNodeDesc} onChange={e => setTempNodeDesc(e.target.value)}></input>
                <button onClick={addNode}>add new</button>
                <button onClick={e => setTargetNode(targetNode)}>refresh Target?</button>
                <NodeDetails
                    deleteNode={deleteNode}
                    updateNode={updateNode}
                    targetNode={targetNode}/>
            </div>
        </div>
    );
}

export default Timeline;