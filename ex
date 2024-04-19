    {/* primeira parte do form */}

                <div className={styles.session}> Quais são as informações do proprietário(a)?
                <button className={styles.buttonSession} onClick={(e)=>handleCloseOrOpen(e)}>
                    <FaChevronDown color='#fff'/>
                </button>
                </div>    
            <form className={styles.containerForm}>
                <label htmlFor="owner"></label>

                <select name="owner" onChange={(e)=>changeValue(e)}>
                    <option value="cpf" defaultValue='cpf'>Pessoa Física (CPF)</option>
                    <option value="mei" >Microeemprendedor Individual (MEI)</option>
                    <option value="cnpj">Pessoa Jurídica (CNPJ)</option>
                </select>
                <label htmlFor="fullName">O proprietário(a) é:</label>
                <input type="text" name="fullName" onBlur={(e)=> onHandleGetValue(e)}/>
                
                <label htmlFor="nationality"> Nacionalidade:</label>
                <input type="text" name="nationality" onBlur={(e)=> onHandleGetValue(e)} />

                <label htmlFor="occupation">Profissão:</label>
                <input type="text" name="occupation" onBlur={(e)=> onHandleGetValue(e)}/>

                {/* segunda parte do form */}


                </form>