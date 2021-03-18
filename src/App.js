import {useState, useEffect} from 'react'

function App() {
  const [a, setA] = useState({val: 2})
  const [b, setB] = useState({val: 4})
  const [c, setC] = useState({val: 3})
  const [d, setD] = useState({val: 3})
  const [e, setE] = useState({val: 2})
  const [f, setF] = useState({val: 6})
  const [g, setG] = useState({val: 2})
  const [h, setH] = useState({val: 9})
  const [i, setI] = useState({val: 5})
  const [j, setJ] = useState({val: 2})
  const [k, setK] = useState({val: 10})
  const [l, setL] = useState({val: 5})
  const [m, setM] = useState({val: 2})
  const [n, setN] = useState({val: 15})
  const [o, setO] = useState({val: 5})
  const [target, setTarget] = useState(720)

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.left = e
    c.right = f
    d.left = g
    d.right = h
    e.left = h
    e.right = i
    f.left = i
    f.right = j
    g.left = k
    g.right = l
    h.left = l
    h.right = m
    i.left = m
    i.right = n
    j.left = n
    j.right =o

    const style = {width: "25px", textAlign: "center"}

return (
    <div className="App">
      <div className='row'>
        <div className='column'>
          <input value={a.val} style={style} onChange={(e) => setA({...a, val: +e.target.value})}>
          </input>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <input value={b.val} style={style} onChange={(e) => setB({...b, val: +e.target.value})}>
          </input>

        </div>
        <div className='column'>
          <input value={c.val} style={style} onChange={(e) => setC(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <input value={d.val} style={style} onChange={(e) => setD(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>
        </div>
        <div className='column'>
          <input value={e.val} style={style} onChange={(e) => setE(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
        <div className='column'>
        <input value={f.val} style={style} onChange={(e) => setF(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
      </div>
      <div className='row'>
        <div className='column'>
        <input value={g.val} style={style} onChange={(e) => setG(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
        <div className='column'>
        <input value={h.val} style={style} onChange={(e) => setH(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
        <div className='column'>
        <input value={i.val} style={style} onChange={(e) => setI(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
        <div className='column'>
        <input value={j.val} style={style} onChange={(e) => setJ(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
      </div>
      <div className='row'>
        <div className='column'>
        <input value={k.val} style={style} onChange={(e) => setK(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
        <div className='column'>
        <input value={l.val} style={style} onChange={(e) => setL(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
        <div className='column'>
        <input value={m.val} style={style} onChange={(e) => setM(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
        <div className='column'>
        <input value={n.val} style={style} onChange={(e) => setN(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
        <div className='column'>
        <input value={o.val} style={style} onChange={(e) => setO(prevStyle =>({...prevStyle, val: +e.target.value}))}>
          </input>

        </div>
      </div>
      <div className='row'>
        Target:
          <input type='string' className='target' value={target} onChange={(e) => setTarget(e.target.value)}>
          </input>
      </div>
      <div className='row'>
        Path: {PyramidDescent(a, target, '')}
      </div>
    </div>
  );
}

var PyramidDescent = (tree, target, output) => {
  if (tree.val !== target) {
  	if (tree.left && tree.right) {
      var goal = target / tree.val
			var leftstring = output + "Left "
      var rightstring = output + "Right "
      var left = PyramidDescent(tree.left, goal, leftstring)
      var right = PyramidDescent(tree.right, goal, rightstring)
      return left || right
    } else {
    	return ''
    }
  } else if (tree.val == target) {
    return output
  }
}

export default App;