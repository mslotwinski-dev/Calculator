import React, { useState } from 'react';
import styled from 'styled-components'

function Calculator() {

    const [result, setResult] = useState("");

    const handleClick = (e: any) => {
        setResult(result + e.target.name);
    }
    
    const clear = () => {
        setResult("");
    }
    
    const count = () => {
        try {
            // eslint-disable-next-line
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Err");
        }
    }

    const calc = {
        square() {
            try {
                // eslint-disable-next-line
                const a:number = eval(result)
                setResult(a*a as unknown as string);
            } catch(err) {
                setResult("Err");
            }
        },
        root () {
            try {
                // eslint-disable-next-line
                const a:number = eval(result)
                setResult(Math.sqrt(a) as unknown as string);
            } catch(err) {
                setResult("Err");
            }
        },
        log () {
            try {
                // eslint-disable-next-line
                const a:number = eval(result)
                setResult(Math.log(a) as unknown as string);
            } catch(err) {
                setResult("Err");
            }
        },
        exp () {
            try {
                // eslint-disable-next-line
                const a:number = eval(result)
                setResult(Math.exp(a) as unknown as string);
            } catch(err) {
                setResult("Err");
            }
        },
        trig: {
            sin () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.sin(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            cos () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.cos(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            tan () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.tan(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            asin () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.asin(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            acos () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.acos(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            },
            atan () {
                try {
                    // eslint-disable-next-line
                    const a:number = eval(result)
                    setResult(Math.atan(a) as unknown as string);
                } catch(err) {
                    setResult("Err");
                }
            }
        }
    }

    return (
        <Outline>
            <Screen type="text" value={result} />
            <KeyContainer>
                <Key name="sin" onClick={calc.trig.sin} className="trigonometric">sin</Key>
                <Key name="cos" onClick={calc.trig.cos} className="trigonometric">cos</Key>
                <Key name="tg" onClick={calc.trig.tan} className="trigonometric">tg</Key> 
                <Key name="(" onClick={handleClick} className="operation">(</Key>
                <Key name=")" onClick={handleClick} className="operation">)</Key> 
                <Key id="clear" onClick={clear} className="operation">␡</Key>

                <Key name="arcsin" onClick={calc.trig.asin} className="trigonometric">arcsin</Key> 
                <Key name="arccos" onClick={calc.trig.acos} className="trigonometric">arccos</Key>
                <Key name="arctg" onClick={calc.trig.atan} className="trigonometric">arctg</Key>
                <Key name="ln" onClick={calc.log} className="advanced">ln</Key>
                <Key name="ex" onClick={calc.exp} className="advanced">eˣ</Key>
                <Key name="%" onClick={handleClick} className="basic">%</Key>

                <Key name="1" onClick={handleClick} className="number">1</Key>
                <Key name="2" onClick={handleClick} className="number">2</Key>
                <Key name="3" onClick={handleClick} className="number">3</Key>
                <Key name="+" onClick={handleClick} className="basic">+</Key> 
                <Key name="-" onClick={handleClick} className="basic">−</Key>
                <Key name="*" onClick={handleClick} className="basic">×</Key>

                <Key name="4" onClick={handleClick} className="number">4</Key>
                <Key name="5" onClick={handleClick} className="number">5</Key>
                <Key name="6" onClick={handleClick} className="number">6</Key>
                <Key name="/" onClick={handleClick} className="basic">÷</Key>
                <Key name="root" onClick={calc.root} className="basic">√</Key>
                <Key name="square" onClick={calc.square} className="basic">x²</Key>

                <Key name="7" onClick={handleClick} className="number">7</Key>
                <Key name="8" onClick={handleClick} className="number">8</Key>
                <Key name="9" onClick={handleClick} className="number">9</Key>
                <Key name="0" onClick={handleClick} className="number">0</Key>
                <Key name="." onClick={handleClick} className="basic">,</Key>
                <Key id="result" onClick={count} className="basic"> = </Key>

            </KeyContainer>
        </Outline>
    );
  }

  const Outline = styled.div`
  width:540px;
  height:700px;
  background:#001A21;
  border-radius:35px;
  padding:10px;
  display:flex;
  flex-direction:column;`

  const Screen = styled.input`
  margin:20px 10px;
  flex-grow:1;
  box-sizing:border-box;
  border:none;
  border-radius:15px;
  background:#ffffff05;
  padding:15px;
  text-align:right;
  font-size:40px;
  color:white;`

  const KeyContainer = styled.div`
  height:540px;
  box-sizing:border-box;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  margin:10px;`

  const Key = styled.button`
  font-size:35px;
  display:block;
  width:70px;
  height:80px;
  color:#e3e3e3;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#262834;
  margin:5px;
  cursor:pointer;
  border:none;
  `

export default Calculator;
