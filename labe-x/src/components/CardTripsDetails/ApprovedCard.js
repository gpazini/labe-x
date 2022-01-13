import {CardCandidatoAprovado} from './style'
export const ApprovedCard = (props) => {
    const traveler = props.candidates
    return (
        <div>
            {traveler && traveler.approved && traveler.approved.map((data) =>{
                return (
                    <div key={data.id}>
                        <CardCandidatoAprovado>
                            <span>Nome:</span><span class="conteudo">{data.name}</span>
                        </CardCandidatoAprovado>
                    </div>
                )
            })}
        </div>
    )
}