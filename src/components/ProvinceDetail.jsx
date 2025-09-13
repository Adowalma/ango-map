import React, { useEffect } from 'react'


const ProvinceDetail = ({ provinceData, localImage }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  useEffect(() => {
    AOS.refresh();
  }, [provinceData])
  
  return (
    <div className='detail-content'>
      {provinceData != 0 ? (
        <div className='not-empty-content'>
          <img src={localImage} data-aos="zoom-in"/>
          <div className="data">
            <div data-aos="zoom-in">
              <p><span>Nome: </span>{provinceData.vc_nome}</p>
              <p><span>Capital: </span>{provinceData.vc_capital}</p>
              <p><span>Línguas: </span>{provinceData.vc_linguas}</p>
              <p><span>Densidade Populacional: </span>{provinceData.vc_densidade_populacional}</p>

            </div>
            <div data-aos="zoom-in">
              <p><span>Data de fundação: </span>{provinceData.vc_data_fundacao_provincia}</p>
              <p><span>Extensão: </span>{provinceData.vc_extensao}</p>
              <p><span>Etnias: </span>{provinceData.vc_etnias}</p>
              <p><span>Número de municípios: </span>{provinceData.it_numero_municipios}</p>

            </div>

          </div>
        </div>
      ) : (
        <div className="empty-content">
          <p className='description'>Visualizar aqui...</p>

        </div>
      )}

    </div>
  )
}

export default ProvinceDetail